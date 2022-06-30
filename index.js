function superbowlWin(record) {
    const answer = record.find(record => record.result === "W")
    return answer ? answer.year : undefined;
}
