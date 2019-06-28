1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

`describe` breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.

You can also nest describes to further subdivide the suite.

`it` is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use describe instead.

2. What is the point of `Test Driven Development`? What do you think about this approach?

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only.

I find it very time consuming and tedious, however, why build code if you are not going to test it, as a break could cost a lot more time and effort (along with goodwill) down the road.  So I would say it is a necessary evil.

3. Mention three types of automated tests.

Unit testing, Integration testing and End-to-end testing.
