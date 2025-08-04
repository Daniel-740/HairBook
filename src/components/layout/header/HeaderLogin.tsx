import { Image, Text, View } from "react-native"

type HeaderImgProps = {
    title: string;
    home?: boolean;
};

export const HeaderLogin = ({title, home = false}: HeaderImgProps) => {
    return (
        <View className="mb-2 flex-row items-center justify-">
            <Image
                source={require('../../../../assets/images/header.png')}
                className="w-full h-[240px] object-contain"   
            />
                <Text className="ml-6 mb-4 text-3xl absolute text-center font-medium text-white">
                    Bienvenido a
                </Text>
                <Text className="ml-6 mt-20 text-4xl absolute text-center font-bold text-white">
                    {title}
                </Text>
        </View>
    )
}