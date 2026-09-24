interface TitleProps{
    title: string;
    subtitle: string;
}

const SectionTitle = ( { title, subtitle } : TitleProps)=> {
    return(
        <div className="mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
                {title}
            </h2>
            <p className="mt-1 text-sm text-foreground/80 sm:text-base">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionTitle;