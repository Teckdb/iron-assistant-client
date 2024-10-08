import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    Select
} from '@mantine/core'
import DevicesServices from '../../services/devices.services'
import UploaderPicture from '../UploaderPicture/UploaderPicture'

const NewDeviceForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            deviceType: '',
            logicFuction: '',
            brightness: null,
            picture: '',
            temperature: null,
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
            deviceType: (value) => value === '' ? 'Device type is required' : null
        }
    })

    const handleDeviceTypeChange = (value) => {
        form.setFieldValue('deviceType', value)

        if (value === 'light') {
            form.setFieldValue('brightness', 0)
            form.setFieldValue('temperature', null)
        } else if (value === 'thermostat') {
            form.setFieldValue('temperature', 0)
            form.setFieldValue('brightness', null)
        }
    }

    const handleFormSubmit = deviceData => {

        DevicesServices
            .postNewDevice(deviceData)
            .then(() => {
                alert("Created")
            })
            .catch(err => console.log(err))
    }

    const updateForm = imageUrl => {
        form.setFieldValue('picture', imageUrl)
    }

    return (
        <Fieldset legend="Device information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <Select
                    label="Select device type"
                    placeholder="Pick value"
                    data={['light', 'thermostat']}
                    key={form.key('deviceType')}
                    {...form.getInputProps('deviceType')}
                    onChange={handleDeviceTypeChange}
                />
                <UploaderPicture updateForm={updateForm} />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewDeviceForm