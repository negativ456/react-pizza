import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "@mui/material";
import { PageCounter } from "../utils/PageCounter";
import { useSelector } from "react-redux";
import qs from "qs";

import { sortOptions } from "../components/HomePage/Sort";
import {
  Categories,
  PizzaList,
  Skeleton,
  ErrorBlock,
  Sort,
} from "../components";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../redux/store";
import { filterSelector } from "../redux/filter/selectors";
import { pizzaDataSelector } from "../redux/pizza/selectors";
import { fetchPizza } from "../redux/pizza/asyncActions";
import { setCurrentPage, setFilters } from "../redux/filter/slice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortOp, page, search } = useSelector(filterSelector);
  const { items, status } = useSelector(pizzaDataSelector);

  const [limit, setLimit] = useState<number>(4);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getPizza = async () => {
    const params = {
      limit,
      page,
      search,
      category: categoryId,
      sortBy: sortOp.value,
    };
    dispatch(fetchPizza(params));
    const total = 10;
    setTotalPages(PageCounter(total, limit));
  };
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortOp: sortOp.value,
        categoryId,
        page,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortOp, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortOp = sortOptions.find((obj) => obj.value === params.sortOp);
      dispatch(
        // @ts-ignore
        setFilters({
          ...params,
          sortOp: sortOp || sortOptions[0],
        })
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizza();
    }
    isSearch.current = false;
  }, [categoryId, sortOp, page, search]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} />
          <Sort sortOp={sortOp} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === "error" ? (
          <ErrorBlock />
        ) : (
          <div>
            <div className="content__items">
              {status === "loading" ? (
                [...new Array(4)].map((_, i) => <Skeleton key={i} />)
              ) : (
                <PizzaList pizzaList={items}></PizzaList>
              )}
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => dispatch(setCurrentPage(value))}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
