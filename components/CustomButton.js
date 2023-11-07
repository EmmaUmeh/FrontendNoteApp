
const CustomButton = ({children}) => {
    return(
        <>
            <div>
                <button type="button" className="bg-indigo-500 rounded-md p-2 cursor-pointer">{children}</button>
            </div>
            
        </>
    )
}

export default CustomButton;