type propsType = {
    skill:string;
    cardBubble?:Boolean;
}

const SkillBubble = ({ skill, cardBubble }:propsType) =>{

    return(
        <>
            <div className={ cardBubble ? "skill-bubble px-2 py-1" :" skill-bubble px-3 py-2"}>
                <span className={ cardBubble ? " text-sm" : ""}>
                    {skill}
                </span>
            </div>
        </>
    )
}

export default SkillBubble;