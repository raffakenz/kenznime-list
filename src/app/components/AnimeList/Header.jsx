import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-5">
        <h1 className="md:text-2xl text-lg font-bold text-white mt-6">{title}</h1>
        {linkHref && linkTitle ? 
          <Link href={linkHref} className="md:text-xl text-white text-sm hover:text-color-biru hover:scale-105 transition-all mt-6">{linkTitle}</Link>
          : null
      }
      </div>
    )
}

export default Header