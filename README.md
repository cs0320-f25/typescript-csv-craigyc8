# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

    Issue 1: dealing with commas
        Currently, the basic CSV parser has difficulty with commas. Whenever it
        sees a comma, it is assuming that it can move onto the next item on the
        list. This means that even if a comma is within quotes, it will try to
        move onto the next item.
    Issue 2: dealing with object types and standardization
        When parsing through the CSV, the parser should be able to expect an
        item in a row to have a certain type. This makes it so that each list is
        standard. For example, if we have CSV file with a student name and their
        ID number, we want the parser to know that it is to expect those two
        types and in order. We don't want to have strings for example where an
        integer should be.
    Issue 3: dealing with labels
        The first row of the CSV should not be counted as part of the CSV. In
        the current implementation of the parser, it doesn't have anything that
        dismisses the first row.
    Issue 4: dealing with double quotes
        Currently, the parser is having difficulty dealing with strings in
        double quotes. For example, in the testing.csv I made, the row
        "Charlie",25 is being interpreted as ""Charlie"", 25 rather than
        "Charlie", 25. So I think the step to take is to have the parser be able
        to strip surrounding quotes that are unnecessary.


- #### Step 2: Use an LLM to help expand your perspective.

    Original prompt from handout:
        The LLM addressed the question directly by offering "Missing Features &
        Edge Cases" and "Improvements for Usability". It pointed out new things
        that I had not thought about such as custom delimiters, line ending
        support, Unicode/BOM handling, streaming vs. loading, ignoring comments,
        and fields with embedded newslines. These are all missing features that
        I would consider implementing. The suggestions such as Unicode/BOM
        handling and Multi-line fields are suggestions that I have never thought
        about prior. I think that it definitely addressed what the prompt asked.
        The improvements for usability were also relevant (flexible input,
        documentation, extensibility, error reporting).

    Alternate prompt ("help me make my csv parser in Typescript good"):
        I thought the response I got with this question wasn't actually too bad.
        It told me that I needed to focus on "Handle Edge Cases", "Type Safety",
        "Performance", and "Configurable". I think that in a broad sense, it
        helps me think about what needs to go into improving a CSV parser. I
        would definitely follow up this response with something more specific.
        For example, I could ask the LLM for specific edge cases that I might
        need to handle. However, it also gave me an entire CSV parser to copy
        and paste which probably isn't in the spirit of the sprint.

    Alternate prompt ("I’m building on a CSV parser in TypeScript that currently
    accepts a filename as input and converts rows into strings or objects. What
    is the correct thought process and steps I should take when constructing a
    CSV parser from scratch. Don't give me specific suggestions but please try
    to help guide my thought process as I want to come up with ideas for edge
    cases, for example, on my own.):
        This just gave me a block of text. It gave me the following steps:
            1. consider the overall goal and inputs and outputs to support
            2. break down the problem into smaller components
            3. handling delimiters, quoted fields, escape characters
            4. managing errors and malformed data
            5. plan for extensibility.
        This was my favorite response since I like how it gave me a thought
        process to approaching this problem. Even though it did end up giving a
        good amount of specific suggestions regarding delimiters, quoted fields,
        escape characters, etc., I liked that it was in order and that I could
        read through the response and follow the journey it gave me.

    Differences:
        The results definitely differed depending on the prompt. I think what is
        to be learned is that the more specific you are, the more suitable
        response you will get which makes sense. I think that asking a broad
        question is not a horrible thing though, as it can give you ideas on
        what to think about and then you can ask more specific questions about
        what it initially gives.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.)

    1 (Extensibility, from myself/lecture and LLM): interface implementation
        As a user, I want to be able to ensure that the CSV I am parsing can
        detect any fields that don't fit within the specific type structure that
        I desire. I don't want the parser to accept a string where I want an
        integer.
    2 (Functionality, from LLM): custom delimiters other than commas
        As a user, I want the parser I am using to be compatible with all the
        data files that I have. So I would like to be able to use files that
        not only use commas to separate values, but also tabs or semicolons.
    3 (Functionality, from LLM): streaming support
        As a user, if I have a large file, I don't want to have to load it all
        at once and I want my parser to be able to stream the file so I don't
        have to worry about issues with memory.
    4 (Functionality, from myself/lecture and LLM): error handling
        As a user, I need to be able to understand what is going wrong with my
        parser. If there is no proper way of handling errors or at least
        notifying me of what is going wrong, then the parser definitely needs
        more work done on it for it to be acceptable.
    
    My initial ideas were very basic and fundamental, focused on issues that
    were easily testable. For example, I had thought about dealing with commas
    and dealing with double quotes as the main priority. Of course, in lecture
    we were also introduced to zod and interfaces so that was also something I
    was thinking about. But as I did more of the sprint and asked the LLM the
    three different prompts, I realized that there was a lot that I would not
    have thought about. The two prompts that were most useful were the original
    one from the handout since it directly addressed the questions we are asking
    right now for the assignment but also the third prompt where I asked for it
    to give me a thought process. What resonated with me particularly about the
    third prompt was that it gave me a process and journey of thought that I
    could maybe apply to other problems later on. What didn't resonate with me
    was the second prompt where it just gave me code. I think that getting code
    from an LLM is necesarily a bad thing, but I think that allowing yourself
    to think things through beforehand makes it so that you can better
    understand the code you are receiving and what the process behind
    constructing that code might be.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
