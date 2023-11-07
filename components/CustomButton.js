
const CustomButton = ({children, onClick}) => {
    return(
        <>
            <div>
                <button type="button" onClick={onClick} className="bg-indigo-500 rounded-md p-2 cursor-pointer">{children}</button>
            </div>
            
        </>
    )
}

export default CustomButton;