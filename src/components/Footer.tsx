const Footer = () =>{
    
    const date = new Date();

    const currentYear = date.getFullYear();


    return(
        <>
            <section className="py-4 max-lg:mt-20 round ed-lg absolute logo-font left-0 dark:bg-neutral-900 bg-neutral-800 w-full text-white">
                <p className="text-center">© {currentYear} · Nafeez</p>
            </section>
        </>
    )
}

export default Footer;