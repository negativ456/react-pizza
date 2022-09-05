import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="365" y="259" rx="3" ry="3" width="178" height="6" />
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="264" rx="20" ry="20" width="280" height="30" />
    <rect x="0" y="308" rx="0" ry="0" width="280" height="88" />
    <rect x="124" y="420" rx="25" ry="25" width="152" height="43" />
    <rect x="0" y="427" rx="25" ry="25" width="90" height="27" />
  </ContentLoader>
);

export default Skeleton;
