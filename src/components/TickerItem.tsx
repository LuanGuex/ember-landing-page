interface TickerItemProps {
    text: string
}

export default function TickerItem({text} : TickerItemProps) {
    return( 
        <div className="ticker__item">
            <span>{text}</span>
            <div className="ticker__dot" aria-hidden="true"/>
        </div>
    )
}