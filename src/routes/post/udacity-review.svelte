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
    margin-top: 18px;
  }
</style>

<svelte:head>
  <title>Udacity Review</title>
</svelte:head>

<h1>Udacity Review</h1>

<div><img src="{ baseUrl }/udacity.svg" alt="Udacity Logo" width="100%"></div>

<p>In the last few months I completed a few courses at Udacity, the <a href="https://confirm.udacity.com/SAHCHLHS">Flying Car and Autonomous Flight Engineering Nanodegree</a> and the <a href="https://confirm.udacity.com/ZQV7K5UM">Sensor Fusion Engineer Nanodegree</a>, and I am currently enrolled in others. This is therefore a good time to give a review of my experience with the educational platform.</p>

<h2>The offering</h2>

<p>Udacity offers several Nanodegrees separated in a few schools: Data Science, Programming, Business, Artificial Intelligence, Autonomous Systems, Cloud Computing, Cybersecurity. I have only experience in Data Science and Autonomous Systems. They also offers some free courses that are often quite old. They probably correspond to Udacity offering before deciding to move to the nanodegree offering structure.</p>

<p>Some of the offering is quite unique to Udacity, particularly the Autonomous System one, and it can be difficult to find other resources on these topics.</p>

<h3>Lessons</h3>

<p>The lessons organization is quite standard for a MOOC. There are video lessons, some reading and exercises. The exercises in the courses I completed were either quizzes or coding exercises. For the coding exercise they provide a virtual machine or a Jupyter notebook to be completed. All exercises and lessons are actually optional. Only the projects have to be completed to graduate from the course. The coding exercises are however useful as the code is often then used inside the project.</p>

<p>The lessons are relatively superficial, even in the advanced courses. The nanodegrees prefer in fact to provide a broad overview of many topics instead of giving a very in-depth description of some specific one. A nanodegree is thus more a starting point to become an expert, than a way to become one. This is however mostly true for most courses both online and in-person.</p>

<p>The lessons are generally created with some partners and they often also contains interviews or lessons given by these partners.</p>

<h3>The Projects</h3>

<p>One thing that set Udacity apart from other MOOC platforms is the focus on completing a few <em>real world</em> projects. Each course is indeed separated in sections and each section correspond to a specific project that have to be completed in order to graduate from the nanodegree. The content of the sections are mostly focused on giving the necessary knowledge and skills to complete the projects, but they sometimes give additional information as well.</p>

<p>These projects are designed as tasks you may be given when working in the corresponding role in the industry. They generally require some thinking and experimentation, but they still  mostly follows from their section content. They were never particularly difficult in my experience, but some of them required a lot of work.</p>

<p>Once the project is completed you get a review from an actual person. The quality of these reviews unfortunately depends heavily on the reviewer. Some reviews were very detailed with additional links to discover more about the particular topic of the section and with advices on how to make things better. Others were very brief and they simply checked the rubric points.</p>

<h3>Student Services</h3>

<p>The platform contains a slack-like forum to interact with other students and an help platform where you can ask questions to mentors about the projects or lessons. They work, but they are very basic and limited.</p>

<h3>Career Services</h3>

<p>I haven’t used the career services much as I haven’t enrolled in the courses for getting a new career. I however found the content provided about optimizing your resume, Github or Linkedin profiles very interesting and good. Until recently it was also possible to have a 1:1 chat with a career coach. I had one of these meetings and I had a quite good experience. Unfortunately they decided to discontinue the service.</p>

<h2>Cost</h2>

<p>One of the main drawbacks of Udacity is its cost. The nanodegrees are in fact quite expensive. There are two ways to pay for a nanodegree: a pay-as-you-go one where you pay some amount each month or a single payment one. I personally always chosen to go with the pay-as-you-go. In fact it always took me less then the listed average time to complete the courses. The courses are also often discounted, up to 75% recently, and I suggest to wait for one of these discounts instead of paying the full price if possible.</p>

<h2>Conclusion</h2>

<p>I had a generally good experience with Udacity and I think it can be worth its money, particularly when completing the courses in one-two months and when on discount. I think the advanced courses are probably the best ones to take are they are often quite unique and they are the most in-depth ones. The content presented from the most basic ones can be easily found somewhere else.</p>
