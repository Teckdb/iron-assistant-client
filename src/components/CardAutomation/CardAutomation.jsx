import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core'
import classes from './CardAutomation.module.css'

const CardAutomation = ({ name, floor, picture }) => {

    const theme = useMantineTheme()

    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
        >
            <div
                className={classes.image}
                style={{
                    backgroundImage:
                        `url(${picture})`,
                }}
            />
            <div className={classes.overlay} />

            <div className={classes.content}>
                <div>
                    <Text size="lg" className={classes.title} fw={500}>
                        {name}
                    </Text>

                    <Group justify="space-between" gap="xs">
                        <Text size="sm" className={classes.author}>
                            {floor}
                        </Text>

                        <Group gap="lg">
                            <Center>
                            </Center>
                        </Group>
                    </Group>
                </div>
            </div>
        </Card>
    )
}

export default CardAutomation