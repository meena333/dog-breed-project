export const CHECK_GAME_CHOICE = "CHECK_GAME_CHOICE"

export function checkGameChoice(gameNumber) {
    return {
        type: CHECK_GAME_CHOICE,
        payload: gameNumber
    };
}