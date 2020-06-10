import React from "react"
// https://danilowoz.com/create-content-loader/
import ContentLoader from "react-content-loader"
const Card = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={200}
    viewBox="0 0 270 200"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
  </ContentLoader>
)
export default Card;