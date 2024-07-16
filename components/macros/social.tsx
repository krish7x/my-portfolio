import { Divider } from "@nextui-org/react";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Social() {
  return (
    <>
      {/* desktop */}
      {/* left */}
      <div className="bottom-0 left-0 right-auto max-sm:right-0 md:fixed md:left-16">
        <Divider
          orientation="vertical"
          className="absolute bottom-0 left-3 h-24 bg-blue-600 dark:bg-custom2 max-sm:hidden"
        />
        <div className="flex flex-col gap-6 max-sm:pl-12">
          <div className="flex gap-5 md:mb-28 md:flex-col">
            {[FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter].map(
              (Icon, index) => (
                <Link
                  key={"social-links-" + index}
                  href={"https://github.com/krish7x"}
                  target="__blank"
                  className="transform transition-all duration-0.25s ease-custom-cubic hover:-translate-y-2 hover:delay-100"
                  aria-label={"social-links-" + index}
                >
                  <Icon
                    size={24}
                    className="fill-blue-600 dark:fill-custom2 dark:hover:fill-white"
                  />
                </Link>
              ),
            )}
          </div>
          <h2 className="pl-4 text-medium md:hidden">
            Made with ❤️ by{" "}
            <span className="font-semibold text-blue-600 dark:text-custom4">
              Krish
            </span>
          </h2>
        </div>
      </div>

      {/* right */}
      <div className="fixed bottom-0 left-auto right-16 max-sm:hidden">
        <Divider
          orientation="vertical"
          className="absolute bottom-0 left-[calc(6px)] h-24 bg-blue-600 dark:bg-custom2"
        />
        <div className="mb-28 flex translate-y-1 flex-col gap-5">
          <Link
            href={"mailto:krishnakumar99g@gmail.com"}
            target="__blank"
            className="inline-block text-sm font-medium leading-4 text-blue-600 no-underline transition-all duration-0.25s ease-custom-cubic vertical-rl hover:-translate-y-2 dark:text-custom2 dark:hover:text-custom4"
          >
            krishnakumar99g@gmail.com
          </Link>
        </div>
      </div>

      {/* mobile */}
    </>
  );
}
