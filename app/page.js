
import CustomButton from "@/components/CustomButton";
import { PiPlus } from "react-icons/pi"


export default function Home() {
    return(
        <>
            <div className="py-3 px-5">
         
                <div className="flex items-center justify-between">
                    
                    <h2>Feeds</h2>
                    
                <div>
                    <CustomButton>
                        <div className="flex items-center p-1">
                            <PiPlus color="white"/>Create Notes
                        </div>
                    </CustomButton>
                </div>
                </div>
            </div>
        </>
    )
}