import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 mr-2 p-1 text-sm font-medium uppercase bg-gray-700 rounded-md shadow-md text-gray-200 hover:bg-gray-800 hover:text-gray-200 dark:hover:text-primary-400 ">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
