interface CategoryInterface {
    category: string,
    tags: {
        tagName: string,
        tagCount: number
    }[],
    categoryItems: number,
    categoryColor: string
}

export const categories: CategoryInterface[] = [
    {
        category: "Notes",
        tags: [
            { tagName: "Ideas", tagCount: 8 },
            { tagName: "Reminders", tagCount: 5 },
            { tagName: "Tasks", tagCount: 10 },
            { tagName: "Meetings", tagCount: 3 },
            { tagName: "Thoughts", tagCount: 6 }
        ],
        categoryItems: 42,
        categoryColor: "#3b82f6"
    },
    {
        category: "Links",
        tags: [
            { tagName: "Articles", tagCount: 15 },
            { tagName: "Tutorials", tagCount: 7 },
            // { tagName: "Videos", tagCount: 10 },
            // { tagName: "Resources", tagCount: 6 },
            // { tagName: "Websites", tagCount: 9 }
        ],
        categoryItems: 30,
        categoryColor: "#a855f7"
    },
    {
        category: "Code Snippets",
        tags: [
            { tagName: "JavaScript", tagCount: 20 },
            { tagName: "Python", tagCount: 15 },
            { tagName: "HTML/CSS", tagCount: 12 },
            { tagName: "React", tagCount: 8 },
            { tagName: "Vue.js", tagCount: 6 }
        ],
        categoryItems: 50,
        categoryColor: "#3b82f6"
    },
    {
        category: "Thoughts",
        tags: [
            { tagName: "Reflections", tagCount: 10 },
            { tagName: "Inspiration", tagCount: 8 },
            { tagName: "Musings", tagCount: 6 },
            { tagName: "Ideas", tagCount: 12 },
            { tagName: "Memories", tagCount: 5 }
        ],
        categoryItems: 20,
        categoryColor: "#737373"
    },
    {
        category: "Todos",
        tags: [
            { tagName: "Work", tagCount: 10 },
            { tagName: "Personal", tagCount: 15 },
            { tagName: "Errands", tagCount: 8 },
            { tagName: "Shopping", tagCount: 6 },
            { tagName: "Fitness", tagCount: 7 }
        ],
        categoryItems: 35,
        categoryColor: "#f97316"
    },
    {
        category: "Images",
        tags: [
            { tagName: "Landscapes", tagCount: 20 },
            { tagName: "Portraits", tagCount: 15 },
            { tagName: "Nature", tagCount: 12 },
            { tagName: "Animals", tagCount: 10 },
            { tagName: "Travel", tagCount: 18 },
            { tagName: "Nature", tagCount: 12 },
            { tagName: "Animals", tagCount: 10 },
            { tagName: "Travel", tagCount: 18 }
        ],
        categoryItems: 25,
        categoryColor: "#ef4444"
    },
    {
        category: "Tweets",
        tags: [
            { tagName: "Landscapes", tagCount: 20 },
            { tagName: "Portraits", tagCount: 15 },
            { tagName: "Nature", tagCount: 12 },
            { tagName: "Animals", tagCount: 10 },
            { tagName: "Travel", tagCount: 18 },
            { tagName: "Nature", tagCount: 12 },
            { tagName: "Animals", tagCount: 10 },
            { tagName: "Travel", tagCount: 18 }
        ],
        categoryItems: 2,
        categoryColor: "#1DA1F2"
    }
];

