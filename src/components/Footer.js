import React from 'react'
import { GU, Link as AragonLink, textStyle, useTheme } from '@aragon/ui'
import styled from 'styled-components'
import Layout from './Layout'
import antSvg from '../assets/logo-ant.svg'

export default function Footer({ compact }) {
  const theme = useTheme()

  return (
    <footer
      css={`
        flex-shrink: 0;
        width: 100%;
        padding: ${5 * GU}px ${compact ? `${3 * GU}px` : 0};
        background: ${theme.surface};
      `}
    >
      <Layout>
        <div
          css={`
            display: ${compact ? 'block' : 'flex'};
            align-items: flex-start;

            & > div {
              margin-bottom: ${2 * GU}px;

              &:not(:first-child) {
                width: ${25 * GU}px;
              }
            }

            & a {
              color: ${theme.contentSecondary};
            }
          `}
        >
          <div
            css={`
              width: ${40 * GU}px;
            `}
          >
            <img src={antSvg} height="40" alt="" />
          </div>
          <div>
            <h5
              css={`
                ${textStyle('body1')};
                margin-bottom: ${1.5 * GU}px;
              `}
            >
              Community
            </h5>
            <Link href="https://aragon.org/blog" external>
              Blog
            </Link>
            <Link href="https://github.com/aragon/" external>
              Github
            </Link>
            <Link href="https://twitter.com/aragonproject" external>
              Twitter
            </Link>
            <Link href="https://forum.aragon.org/" external>
              Forum
            </Link>
          </div>
          <div>
            <h5
              css={`
                ${textStyle('body1')};
                margin-bottom: ${1.5 * GU}px;
              `}
            >
              Tools
            </h5>
            <Link href="https://wiki.aragon.org/" external>
              Wiki
            </Link>
            <Link href="https://connect.aragon.org/" external>
              Connect
            </Link>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

// TODO: Move to 1hive-ui
const Link = styled(AragonLink)`
  display: block;
  margin-bottom: ${1.5 * GU}px;
  text-align: left;
  text-decoration: none;
`
