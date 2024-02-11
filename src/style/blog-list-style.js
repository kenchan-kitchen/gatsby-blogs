import styled from "styled-components"

export const BlogListHeader = styled.header`
  text-align:center;
  h1 {
    &:after {
      margin: 0 auto;
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: rgb(29, 104, 88);
    }
  }
`
export const BlogListWrapper = styled.ol`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 20px;

    a {
        color: var(--black);
        text-decoration: none ;
    }
    h2 {
        font-size: 18px;
    }
  }
  .thumbnail {
    position: relative;

    time {
      font-weight: 700;
      position: absolute;
      left: 0;
      top: 10px;
      background: rgba(255,255,255,.7);
      padding: 0 10px;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    li {
        box-sizing: border-box;
        padding: 15px;
        width: 33.33%;

        h2 {
          font-size: 22px;

          a {
              &:hover {
              text-decoration: underline;
            }
          }
        }

      .thumbnail {
        transition: .3s;

        &:hover {
            opacity: 0.5;
        }
      }
    }
  }
`