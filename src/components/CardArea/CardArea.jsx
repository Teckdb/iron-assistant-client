import { useState } from 'react'
import { Card, Text, Group, Center } from '@mantine/core'
import classes from './CardArea.module.css'

const CardArea = ({ name, floor, picture }) => {
  const [active, setActive] = useState(false)

  const handleState = () => {
    setActive(!active)
  }

  return (
    <Card
      p="lg"
      shadow="lg"
      className={`${classes.card} ${!active ? classes.desactivate : ''}`}
      radius="md"
      component="a"
      onClick={handleState}
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
                {/* <IconEye
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                    color={theme.colors.dark[2]}
                                /> */}
                {/* <Text size="sm" className={classes.bodyText}>
                                    7847
                                </Text> */}
              </Center>
              <Center>
                {/* <IconMessageCircle
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                    color={theme.colors.dark[2]}
                                />
                                <Text size="sm" className={classes.bodyText}>
                                </Text> */}
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  )
}

export default CardArea