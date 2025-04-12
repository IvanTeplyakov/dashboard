import {BaseButton, BaseCheckbox, BaseFilterChipToggle, BaseInput, BaseRadio, BaseSelector} from "~/components";
import styles from './sidebar.module.css'
import {useState} from "react";
import {Option} from "~/types";

export const Sidebar = () => {
    const [input, setInput] = useState('');
    const [checked, setChecked] = useState(false);
    const [radio, setRadio] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [selectorChecked, setSelectorChecked] = useState(false)

    const handleChangeToggle = () => {
        setToggle(!toggle)
    }

    const handleChangeCheckbox = () => {
        setChecked(!checked);
    }

    const handleChange = (value: string) => {
        setInput(value);
    }

    const handleClickRadio = () => {
        setRadio(!radio);
    }

    const handleClickSelector = () => {
        setSelectorChecked(!selectorChecked);
    }

    const options:Option[] = [
        {
            value: 'toggle 1',
            label: 'Toggle 1',
        },
        {
            value: 'toggle 2',
            label: 'Toggle 2',
        },
        {
            value: 'toggle 3',
            label: 'Toggle 3',
        }
    ]

    const [toggleOption, setToggleOption] = useState(options[0])

    const handleChangeToggleOption = (value: Option) => {
        setToggleOption(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Primary button
                <BaseButton
                    value={'я кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                />
                <BaseButton
                    value={'я disabled кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                    disabled
                />
                <BaseButton
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'common_settings'}
                />
            </div>
            <div className={styles.content}>
                Destructive button
                <BaseButton
                    variant={'destructive'}
                    value={'я кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                />
                <BaseButton
                    variant={'destructive'}
                    value={'я disabled кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                    disabled
                />
                <BaseButton
                    variant={'destructive'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'common_settings'}
                />
            </div>
            <div className={styles.content}>
                Secondary button
                <BaseButton
                    variant={'secondary'}
                    value={'я кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                />
                <BaseButton
                    variant={'secondary'}
                    value={'я disabled кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                    disabled
                />
                <BaseButton
                    variant={'secondary'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'common_settings'}
                />
            </div>
            <div className={styles.content}>
                Destructive secondary button
                <BaseButton
                    size={'large'}
                    variant={'destructiveSecondary'}
                    value={'я кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                />
                <BaseButton
                    size={'large'}
                    variant={'destructiveSecondary'}
                    value={'я disabled кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                    disabled
                />
                <BaseButton
                    size={'large'}
                    variant={'destructiveSecondary'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'common_settings'}
                />
            </div>
            <div className={styles.content}>
                White button
                <BaseButton
                    size={"small"}
                    variant={'white'}
                    value={'я кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                />
                <BaseButton
                    size={"small"}
                    variant={'white'}
                    value={'я disabled кнопка'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'action_add'}
                    disabled
                />
                <BaseButton
                    size={"small"}
                    variant={'white'}
                    whenClick={() => console.log('ты ткнул по кнопке')}
                    leftIcon={'common_settings'}
                />
            </div>
            <div className={styles.content}>
                Inputs
                <BaseInput
                    value={input}
                    whenChange={handleChange}
                />
                <BaseInput
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                />
                <BaseInput
                    leftIcon={'action_add'}
                    rightIcon={'action_remove'}
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                />
            </div>
            <div className={styles.content}>
                Inputs
                <BaseInput
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                    size={'small'}
                />
                <BaseInput
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                />
                <BaseInput
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                    size={'large'}
                />
                <BaseInput
                    placeholder={'Placeholder'}
                    value={input}
                    whenChange={handleChange}
                    title={'Title'}
                />
            </div>
            <div className={styles.content}>
                Checkbox
                <BaseCheckbox
                    isChecked={checked}
                    whenClick={handleChangeCheckbox}
                    caption={'Значение'}
                />
                <BaseCheckbox
                    isChecked={checked}
                    whenClick={handleChangeCheckbox}
                    caption={'Значение'}
                    indeterminate
                />
                <BaseCheckbox
                    isChecked={checked}
                    whenClick={handleChangeCheckbox}
                    caption={'Значение'}
                    disabled
                />
                <BaseCheckbox
                    isChecked={checked}
                    whenClick={handleChangeCheckbox}
                    caption={'Значение'}
                    error
                />
            </div>
            <div className={styles.content}>
                Radio
                <BaseRadio
                    caption={'Значение'}
                    isChecked={radio}
                    whenClick={handleClickRadio}
                />
                <BaseRadio
                    caption={'Значение'}
                    isChecked={radio}
                    whenClick={handleClickRadio}
                    disabled
                />
                <BaseRadio
                    caption={'Значение'}
                    isChecked={radio}
                    whenClick={handleClickRadio}
                    error
                />
            </div>
            <div className={styles.content}>
                Selector
                <BaseSelector
                    selected={selectorChecked}
                    whenClick={handleClickSelector}
                    value={'Селектор'}
                />
                <BaseSelector
                    selected={selectorChecked}
                    whenClick={handleClickSelector}
                    value={'Селектор'}
                    disabled
                />
                <BaseSelector
                    selected={true}
                    whenClick={handleClickSelector}
                    value={'Селектор'}
                />
            </div>
            <div className={styles.content}>
                FilterChipToggle
                <BaseFilterChipToggle
                    selected={toggleOption}
                    whenClick={handleChangeToggle}
                    options={options}
                />
            </div>
        </div>

    )
}