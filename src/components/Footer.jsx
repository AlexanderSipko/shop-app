
function Footer() {
    return (
        <footer className="page-footer blue darken-3">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/AlexanderSipko">Repository</a>
          </div>
        </footer>
    )
}

export default Footer