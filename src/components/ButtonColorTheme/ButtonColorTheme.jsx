import classes from './ButtonColorTheme.module.css'
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import cx from 'clsx'

const ButtonColorTheme = () => {
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size={36}
            aria-label="Toggle color scheme"
        >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
    )
}

export default ButtonColorTheme