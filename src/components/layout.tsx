import React from 'react'
import {Link} from 'gatsby'
import {GlobalStyle, styled} from '../styles/theme'
import {reduceEachLeadingCommentRange} from 'typescript'

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`

interface Props {
  readonly back?: string
  readonly title?: string
  readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({children, back}) => (
  <>
    <GlobalStyle />
    <StyledNav className="navigation" style={{marginTop: '23px'}}>
      <ul>
        <li>
          <Link to={`/`}>Main Page</Link>
        </li>
        <li>
          <Link to={`/tags`}>Tags</Link>
        </li>
        {back && (
          <li style={{float: 'right', marginTop: '16px'}}>
            <Link to={back}>Back→</Link>
          </li>
        )}
        {/* <li>
          <Link to={`/about`}>About</Link>
        </li> */}
      </ul>
    </StyledNav>
    <main className="content" role="main">
      {children}
    </main>
    <StyledFooter className="footer">
      © {new Date().getFullYear()},{` `}
      <a href="https://gavinrafter.com">gavinrafter.com</a>. Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>. Also check out:
      {` `}
      <a href="https://www.jeffrafter.com/">jeffrafter.com</a>.
    </StyledFooter>
  </>
)

export default Layout
