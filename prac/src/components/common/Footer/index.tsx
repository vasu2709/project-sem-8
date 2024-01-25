import { contactDetails, footerData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import logo from "@/public/assets/logo-white.png"

import Button from "@/components/ImageWithButton/button"

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className="bg-[#292929] pb-4 items-center">
      <div className="">
        {/* <div>
        <div>
          <p>Subscribe us</p>
          <div className="flex">
            <p>can we get in touch closer</p>
            <Input placeholder="YOUR EMAIL ADDRESS"></Input>
            <Button variant="subscribe">SUbscribe us</Button>
          </div>
        </div>
        <div>
          <Logo></Logo>
          
          <div className="flex">
            <div>
              <Icon />
            </div>
            <div>
              <p>field</p>
              <p>ddescription</p>
            </div>
          </div>
        </div>
        <div>
          <p>© 2023 Your Galacit Bits. All rights reserved.</p>
        </div>
      </div> */}

        {/* <Footer1 /> */}
        <div className="flex flex-col md:flex-col lg:flex-row py-6">
          <div className="w-full md:w-3/5 text-left">
            <p className="text-greenDark-50">Subscribe Us</p>
            <p className="text-3xl text-white">Can we get in-touch closer</p>
          </div>
          <div className="self-center w-full flex flex-col md:flex-row items-center  justify-between gap-2 lg:w-full  py-4">
            {/* <div className=" "> */}
            <input
              type="text"
              className=" px-6 text-lg w-full  items-end py-4 focus:ring-greenDark-50 text-black outline-none bg-offwhite rounded-none border-none"
              placeholder="Your email address "
            />
            {/* </div> */}
            <span className=" max-w-[30%] ">
              <Button variant="subscribe">
                <p className="whitespace-nowrap text-white">Subscribe Us</p>
              </Button>
            </span>
          </div>
        </div>

        <hr className="border-none h-[1px] bg-slate-400" />
        {/* <Footer2 /> */}
        <div className="flex flex-col  gap-0 items-start  md:flex-row">
          <div className="grid grid-cols-1 w-full lg:gap-6 md:grid-cols-4">
            <div className="py-5">
              <Image src={logo} alt="logo" />
            </div>
            {contactDetails.map((contact, index) => {
              const Icon = contact.svg
              return (
                <>
                  <div className="flex mb-2 gap-2  py-6 text-left  lg:px-4 ">
                    <Icon className="h-6 aspect-square text-greenDark-50" />
                    <div className="flex-col">
                      <p className="text-lg font-semibold text-greenDark-50">
                        {" "}
                        {contact.name}
                      </p>
                      <p className="text-sm w-44 md:text-xs lg:text-sm pt-2 text-[#9B9B9B]">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>

          {/* {contactDetails.map((contact, index) => (
            
          <>
            <div className="flex md:w-1/4 mb-2 p-[0.5rem] py-6  lg:gap-3 gap-1">
              <div className="">{contact.icon}</div>
              <div className="text-greenDark-50">{contact.name}</div>
            </div>
          </>
        ))} */}
        </div>

        {/* <div style={{height: '1px', background: 'linear-gradient(90deg, #292929 2%, white 2%, white 98%, #292929 9%)'}}></div><br /> */}
        <hr className="border-none h-[1px] bg-slate-400" />
        <p className="pt-4 pb-4 text-center text-xl text-stone-200">
          © 2024 Your <Link href='/ourteam' className="hover:text-greenDark-50 text-xl duration-300 "> Galacit Bits</Link>. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer

/*{
  import { footerData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"
import NewsLetter from "@/components/NewsLetter"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerImageWrapper}>
        <Image
          fill
          src={footerData.footerImage}
          alt="footer image"
          className="object-contain"
        />
      </div>
      <NewsLetter />
      <footer className={styles.footer}>
        <p className={styles.heading}>{footerData.heading}</p>
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{footerData.description}</p>
            <SocialIcons />
          </div>
          <div className={styles.footerLinks}>
            {footerData?.footerLinks?.map((item, index) => {
              return (
                <div key={index} className={styles.footerLinkSection}>
                  {item?.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        href={link.url}
                        className={styles.link}
                      >
                        {link.title}
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <hr className="opacity-30" />
        <div className={styles.copyrightWrapper}>
          <p className="sm">{footerData.copyright.description}</p>
          <div className={styles.copyrightLinks}>
            {footerData.copyright.links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.copyrightLink}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

}*/
