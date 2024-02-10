import * as React from "react"
// Linkコンポーネント追加
import { Link } from "gatsby"
//このサイトの基本情報を取得
import { siteMetadata } from "../../gatsby-config"
import styled from "styled-components"
const Header = ({ location }) => {
      const rootPath = `${__PATH_PREFIX__}/`
      const isRootPath = location.pathname === rootPath
      let siteName
    
      if (isRootPath) {
        siteName = <h1 className="logo">{siteMetadata.title}</h1>
      } else {
        siteName = (
          <p className="logo">
            <Link to={rootPath}>{siteMetadata.title}</Link>
          </p>
        )
      }
      return (
        <HeaderWrapper>
          <div className="container">
            {siteName}
            <nav>
              <ul>
                <li>
                  <Link to="/blogs/">ブログ</Link>
                </li>
                <li>
                  <Link to="/about/">About Me</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </HeaderWrapper>
      )
    }
    export default Header
    
    const HeaderWrapper = styled.header`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    .container {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .logo {
      font-size: 18px;
      margin: 0;
      font-weight: bold;
  
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
  
    nav ul {
      margin: 0;
      list-style: none;
      display: flex;
  
      li {
        padding: 0 0 0 20px;
  
        a {
          text-decoration: none;
          color: var(--black);
          font-weight: bold;
        }
      }
    }
  `