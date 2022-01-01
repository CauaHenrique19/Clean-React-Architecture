import { ButtonsModalContainer, CancelButton, CloseButton, HeaderModal, ModalContainer, ModalContent, ModalWrapper, SubmitButton } from "./style"

type Props = {
    children: React.ReactNode
    title: string
    width?: number
    submitText?: string
    handleClose: () => void
    handleSubmit: () => void
}

export const Modal : React.FC<Props> = ({ children, title, width, submitText, handleClose, handleSubmit }) => {
    return (
        <ModalContainer>
            <ModalContent width={800} >
                <HeaderModal>
                    <h1>{title}</h1>
                    <CloseButton onClick={handleClose}><i className="bi bi-x"></i></CloseButton>
                </HeaderModal>
                <ModalWrapper>
                    {children}
                    <ButtonsModalContainer>
                        <SubmitButton>{submitText || 'Cadastrar'}</SubmitButton>
                        <CancelButton onClick={handleClose}>Cancelar</CancelButton>
                    </ButtonsModalContainer>
                </ModalWrapper>
            </ModalContent>
        </ModalContainer>
    )
}
