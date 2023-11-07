import Image from "next/image";
import AvatarImage from "@/public/avatar_2.webp"
const Avatar = ({width, height, onClick}) => {
    return(
        <>
            <div className=" ">
                <Image
                   src={AvatarImage}
                   width={width}
                    height={height}
                    onClick={onClick}
                    alt="UploadAvatar"
                    className="rounded-full cursor-pointer"
                />
            </div>
        </>
    )
}

export default Avatar;