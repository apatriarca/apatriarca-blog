<script>
  import { stores } from '@sapper/app';

  let baseUrl = '';

  const { session } = stores();

  session.subscribe(value => {
    baseUrl = value.BASEURL;
  });
</script>

<style>
  h1 {
    text-align: center;
    margin-bottom: 24px;
  }

  h2 {
    margin-top: 24px;
  }

  h3 {
    margin-top: 24px;
  }

  .image-head {
    margin-bottom: 24px;
    margin-top: 24px;
  }

  .author {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Udacity Review</title>
</svelte:head>

<h1>Udacity Review</h1>

<p class="author"><em>Antonio Patriarca - 23 March 2021</em></p>

<div class="image-head"><img src="/udacity.svg" alt="Udacity Logo" width="100%"></div>

<p><strong>Updated on 28 March 2021.</strong> I slightly reorganised the text and included a small review of the courses I have completed.</p>

<p>In the last few months I completed a few courses at Udacity, the <a href="https://confirm.udacity.com/SAHCHLHS">Flying Car and Autonomous Flight Engineering Nanodegree</a> and the <a href="https://confirm.udacity.com/ZQV7K5UM">Sensor Fusion Engineer Nanodegree</a>, and I am currently enrolled in others. This is therefore a good time to give a review of my experience with the educational platform.</p>

<h2>The courses</h2>

<p>Udacity offers several courses, called <em>nanodegrees</em>, organized in seven <em>schools</em>: <strong>Data Science</strong>, <strong>Programming</strong>, <strong>Business</strong>, <strong>Artificial Intelligence</strong>, <strong>Autonomous Systems</strong>, <strong>Cloud Computing</strong> and <strong>Cybersecurity</strong>. I only have experience in courses of the Data Science and Autonomous Systems schools.</p>

<p>Some of the offering is quite <strong>unique</strong> to Udacity, e.&nbsp;g. the Autonomous System courses, as it can be difficult to find other resources on these topics.</p>

<p>There are also some <strong>free courses</strong> hidden inside their catalogue. They are probably old courses offered before the nanodegree structure was introduced and they are <em>somewhat outdated</em>. They can still be interesting and useful however. I enjoyed, for example, the <em>High Performance Computing</em> and the <em>Data Visualization and D3.js</em> ones.</p>

<h3>The lessons</h3>

<p>The lessons structure is quite standard for a MOOC. There are <strong>video lessons</strong>, some <strong>readings</strong> and <strong>exercises</strong>. The exercises are either quizzes or coding sessions in a virtual workspace or Jupyter notebook. All lessons, reading and exercises are <strong>optional</strong>: only the projects have to be completed to graduate from the course.</p>

<p>Even in the advanced courses, the lessons are still relatively superficial. The nanodegrees prefer in fact to provide a <strong>broad overview of many topics</strong> instead of giving a very in-depth description of a specific one. A nanodegree is thus more a starting point than an end to become an expert.</p>

<p>The lessons are generally created with some partners and they often also contains interviews or lessons given by <strong>industry experts.</strong></p>

<h3>The Projects</h3>

<p>One thing that set Udacity apart from other MOOC platforms is the focus on completing a few <strong><em>real world</em> projects</strong>. Each course is indeed separated in sections and each section correspond to a specific project. The content of the sections are mostly focused on giving the necessary knowledge and skills to complete the projects, but they sometimes give additional information as well.</p>

<p>These projects are designed as tasks you may be given when working in the corresponding role in the industry. They generally require some <strong>thinking and experimentation</strong>, but they still mostly follows from their section content. They were never particularly difficult in my experience, but some of them required a lot of work and debugging.</p>

<p>Once the project is completed you get a <strong>review from an actual person</strong>. The quality of these reviews unfortunately depends heavily on the reviewer. Some reviews were very detailed with additional links and advices. Others were very brief and they simply checked the rubric points. However, I still prefer to talk to a person than a computer.</p>

<h3>Student Services</h3>

<p>The platform contains a <strong>slack-like forum</strong> to interact with other students and an <strong>help platform</strong> where you can ask questions to mentors. They work, but they are very basic and limited.</p>

<h3>Career Services</h3>

<p>I have not used the career services much as I have not enrolled in the courses for getting a new career. I however found the <strong>resume, Github or Linkedin profiles optimization</strong> content very interesting and good. Until recently it was also possible to have a 1:1 chat with a career coach. I had one of these meetings and I had a quite good experience. Unfortunately they decided to discontinue the service.</p>

<h2>Cost</h2>

<p>One of the main drawbacks of Udacity is its cost. The nanodegrees are in fact <strong>quite expensive</strong>. There are two ways to pay for a nanodegree: a <strong>pay-as-you-go</strong> one where you pay some amount each month or a <strong>single payment</strong> one. I personally always chosen to go with pay-as-you-go. In fact, I always completed the course much earlier then the listed average time. This may be different for you however depending on how much time you are planning to spend on the courses.</p>

<p>The courses are often <strong>discounted</strong>, up to 75% recently. I strongly suggest to wait for one of these discounts instead of paying the full price.</p>

<p>It is possible to ask for a refund in the first 2 days (14 if you live in Europe). It is not however a lot of time to really evaluate a course as the first section is generally very introductory.</p>

<h2>Courses Reviews</h2>

<h3>Flying Car and Autonomous Flight Engineering Nanodegree</h3>

The name is slightly misleading as it is mostly about flying quadcopters, i.&nbsp;e. drones. However, I really enjoyed the course. The lessons were explained well, the content was interesting and the projects well thought. The main cons of the course are the lack of written content or notes and the fact the projects were not testing some of the more advanced topics covered in the lessons. I give a 5/5 vote in this case.

<h3>Sensor Fusion Engineer Nanodegree</h3>

I enjoyed this course less then the flying car one. The main reason is that I found the first couple of sections too focused on using a particular library instead of teaching the fundamentals. The computer vision projects also required a lot of manual work that could have been removed with a better organization of the project initial code. The last section on the Unscented Kalman Filter was however very good. I would probably give a 3/5 vote.

<h2>Conclusion</h2>

<p>I had a generally good experience with Udacity and I think it can be worth its money, particularly when completing the courses in one-two months and when on discount. I think the advanced courses are probably the best ones to take. They are often quite unique and they are the most in-depth ones. The content presented from the most basic ones can be probably easily found somewhere else.</p>
