export default function Header({ author }) {
    return <h1>Author: { author ? author : 'SRB'}</h1>
}