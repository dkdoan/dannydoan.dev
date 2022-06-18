

export default function Project(props){

    const frameworks = props.tools?.map((tool) => {
        return (<p key={tool} className="bg-white px-2 py-1 m-0.5 rounded-xl text-sm dark:text-black">{tool}</p>)
    })
    return (
        <div className="dark:bg-[#252525] bg-slate-300 p-4 rounded-xl flex flex-col border border-1 dark:border-[#404040] border-slate-200 hover:shadow-lg hover:shadow-blue-600
        transition-shadow duration-300">
            <div className="text-base md:text-lg flex justify-between">
                <p>{props.name}↗️</p>
                <p>demo▶️</p>
            </div>
            <p className="text-sm md:text-base mt-3 mb-3">{props.desc}</p>

            {/* container for frameworks*/}
            <div className="mt-auto flex flex-wrap">
              {frameworks}
            </div>
        </div>
    )
}

