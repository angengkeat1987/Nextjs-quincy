import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React, { ComponentProps, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link, { LinkProps } from 'next/link'
import styles from './ArrowLink.module.css'

const ArrowLink: React.FC<LinkProps & ComponentProps<'a'>> = ({
  href,
  children,
  ...props
}): ReactElement => {
  return (
    <Link href={href}>
      <a
        {...props}
        className={`tracking-wide ${props.className} ${styles['link-label']}`}
      >
        {children} <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </Link>
  )
}

export default ArrowLink
