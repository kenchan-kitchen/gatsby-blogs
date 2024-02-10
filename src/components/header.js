import * as React from "react"
// Linkコンポーネント追加
import { Link } from "gatsby"
//このサイトの基本情報を取得
import { siteMetadata } from "../../gatsby-config"

const Header = ({ location }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let siteName
  
    //トップページ以外はトップへのリンク
    if (isRootPath) {
      siteName = <h1>{siteMetadata.title}</h1>
    } else {
      siteName = (
        <p>
          <Link to={rootPath}>{siteMetadata.title}</Link>
        </p>
      )
    }
    return <header>{siteName}</header>
  }
  export default Header
  