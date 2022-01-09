type Props = {
    text: string,
    handleOnClick?: () => void,
} & React.HTMLProps<HTMLButtonElement>

const Button = ({ text, handleOnClick }: Props) => (
    <button
        onClick={handleOnClick}
        className="button button__green">
        {text}
    </button>
)

export default Button
