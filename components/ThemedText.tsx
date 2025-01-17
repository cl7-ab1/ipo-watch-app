import {StyleSheet, Text, TextProps} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'defaultLight' | 'subtitle' | 'link';
};

export function ThemedText({
                               style,
                               lightColor,
                               darkColor,
                               type = 'default',
                               ...rest
                           }: ThemedTextProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Text
            style={[
                {color},
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'defaultLight' ? styles.defaultLight : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 11,
        lineHeight: 18,
        color: '#797979',
        letterSpacing: 1,
        fontFamily: 'Poppins-Light',
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins-Medium',
    },
    defaultLight: {
        fontSize: 12,
        color: '#00273F',
        fontFamily: 'Poppins-Regular',
    },
    title: {
        fontSize: 16,
        lineHeight: 25,
        color: '#0ba213',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5
    },
    subtitle: {
        fontSize: 12,
        color: '#00273F',
        fontFamily: 'Poppins-Regular',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    },
});
