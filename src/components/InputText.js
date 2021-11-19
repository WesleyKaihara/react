import { Form, Input } from 'antd';
import { useState } from 'react';

function InputText(props) {
    const { label, help, onChange, ...others } = props
    const [MensagemErro, setMensagemErro] = useState('')
    const [changed, setChanged] = useState(false)
    const validadeStatus = MensagemErro ? 'error' : 'success';
    const handChange = (event) => {        //intercepta o valor do input e valida
        const { value } = event.target
        setChanged(true)
        if (value.length > 10) {
            setMensagemErro("Informe no Máximo 10 caracteres");
        }
        else {
            setMensagemErro('');

        }
        onChange(event);
    }
    return (
        <Form.Item
            label={label}
            help={MensagemErro || help}
            hasFeedback={changed}
            validateStatus={validadeStatus}>
            <Input
                {...others}
                onChange={handChange} />         {/*Enviar outras propriedades*/}
        </Form.Item>
    )
}

export default InputText;