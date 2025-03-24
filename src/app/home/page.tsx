export default function Home() {
  return (
    <div className="text-center">
        <h1 className="text-3xl font-bold">Home page</h1>
        <p>
            Hello, tennis world!
        </p>
        <p>
            This is the home page.
        </p>
        <p>
            You can see the latest news, matches, and players here.
        </p>
        <p>
            You can also see the latest news, matches, and players here.
        </p>
        <p>
            You can also see the latest news, matches, and players here.
        </p>
        <p>
            You can also see the latest news, matches, and players here.
        </p>
        <p>
            You can also see the latest news, matches, and players here.
        </p>
        {
            Array.from({ length: 100 }).map((_, index) => (
                <p key={index}>
                    You can also see the latest news, matches, and players here.
                </p>
            ))
        }
    </div>
  )
}
