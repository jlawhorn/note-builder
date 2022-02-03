const structureJSON =
[
    {
        text: "Diagnosis",
        itemId: "0",
        choices: [
            {
                text: "Depression",
                itemId: "0-0",
                choices: [
                    {
                        text: "Take a walk",
                        itemId: "0-0-0",
                        choices: [
                            {
                                text: "No change",
                                itemId: "0-0-0-0"
                            },
                            {
                                text: "the client felt better and then they complained about politics",
                                itemId: "0-0-0-1"
                            }
                        ],
                    },
                    {
                        text: "Take a bath",
                        itemId: "0-0-1",
                        choices: [
                            {
                                text: "It's all good",
                                itemId: "0-0-1-0"
                            },
                            {
                                text: "Now I'm wet",
                                itemId: "0-0-1-1"
                            }
                        ],
                    }
                ]
            },
            {
                text: "Anxiety",
                itemId: "0-1",
                choices: [
                    {
                        text: "Meditation",
                        itemId: "0-1-0",
                        choices: [
                            {
                                text: "I'm so calm",
                                itemId: "0-1-0-0"
                            },
                            {
                                text: "It's too quiet",
                                itemId: "0-1-0-1"
                            }
                        ],
                    },
                    {
                        text: "Medication",
                        itemId: "0-1-1",
                        choices: [
                            {
                                text: "It helped",
                                itemId: "0-1-1-0"
                            },
                            {
                                text: "It didn't help",
                                itemId: "0-1-1-1"
                            },
                            {
                                text: "He's freaking out",
                                itemId: "0-1-1-2"
                            }
                        ],
                    }
                ]
            },
            {
                text: "PTSD",
                itemId: "0-2",
                choices: [
                    {
                        text: "Group Therapy",
                        itemId: "0-2-0",
                        choices: [
                            {
                                text: "Can't stop shaking",
                                itemId: "0-2-0-0"
                            },
                            {
                                text: "Didn't help",
                                itemId: "0-2-0-1"
                            }
                        ],
                    },
                    {
                        text: "Medication",
                        itemId: "0-2-1",
                        responses: [
                            {
                                text: "It helped",
                                itemId: "0-2-1-0"
                            },
                            {
                                text: "It didn't help",
                                itemId: "0-2-1-1"
                            },
                            {
                                text: "He's freaking out",
                                itemId: "0-2-1-2"
                            }
                        ],
                    }
                ]
            }
        ],
    }
];

export default structureJSON;
