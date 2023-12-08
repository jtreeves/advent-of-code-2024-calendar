interface Color {
    color: string
}

interface Text {
    text: string
}

interface Link {
    link: string
}

interface Day {
    day: number
}

interface Name {
    name: string
}

interface ActiveDoor {
    activeDoor: number
}

interface ErrorDoor {
    errorDoor: number
}

interface SwitchDoorHandler {
    (day: number): void
}

interface SwitchDoorProp {
    switchDoor: SwitchDoorHandler
}

interface Title extends Day, Name {}

interface DoorProps extends Day, ErrorDoor, ActiveDoor, SwitchDoorProp {}

interface ActivityProps extends Color, Text, Link {}

export type { ActivityProps, Day, DoorProps, Title, SwitchDoorHandler }
