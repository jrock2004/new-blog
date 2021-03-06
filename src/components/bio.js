import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <div>
      <a href={`https://twitter.com/${social?.twitter || ``}`}>
        <svg
          className="h-10 w-10 fill-current text-gray-500 hover:border hover:border-slate-800 hover:rounded-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#EEE" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.319 13.011a3.07 3.07 0 0 0-2.388 1.136 3.11 3.11 0 0 0-.64 2.578 1.011 1.011 0 0 1-.637 1.141.996.996 0 0 1-.465.054 11.137 11.137 0 0 1-5.834-2.559c.03.606.24 1.25.693 1.923l.679 1.01-1.115.477-.215.093c.16.184.352.372.567.558.287.247.591.474.91.68l.01.007h.002l1.548.944-1.62.814c-.08.04-.16.077-.24.11.348.29.732.535 1.142.73l1.39.66-1.164 1.01c-.635.55-1.274.962-2.103 1.179a8.709 8.709 0 0 0 4.13 1.033c4.807 0 8.677-3.857 8.677-8.582v-.523l.425-.3c.664-.47 1.133-1.103 1.469-1.828h-2.16l-.272-.573a3.098 3.098 0 0 0-1.14-1.292 3.074 3.074 0 0 0-1.648-.48h-.001Zm-11.28 7.341a1.006 1.006 0 0 0-.237.802c.113.805.592 1.499 1.122 2.029.144.144.298.281.46.413l-.075.02c-.481.12-1.13.146-2.211.04a.995.995 0 0 0-1 .566 1.01 1.01 0 0 0 .187 1.138c1 1.029 2.196 1.845 3.516 2.402 1.32.556 2.737.841 4.168.838 5.713 0 10.399-4.46 10.664-10.09 1.29-1.09 1.935-2.564 2.283-3.905a1.01 1.01 0 0 0-.527-1.157.996.996 0 0 0-.441-.103h-2.353a5.092 5.092 0 0 0-2.405-1.986 5.06 5.06 0 0 0-3.106-.206 5.082 5.082 0 0 0-2.643 1.653 5.13 5.13 0 0 0-1.191 2.891 9.207 9.207 0 0 1-4.721-2.991 1.001 1.001 0 0 0-.9-.347.997.997 0 0 0-.773.578c-.606 1.33-.722 2.862-.046 4.42l-.234.101a1.01 1.01 0 0 0-.57 1.2c.186.655.604 1.235 1.032 1.694Z"
            fill="#000"
          />
        </svg>
      </a>
    </div>
  )
}

export default Bio
