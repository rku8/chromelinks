const links = [
    "https://www.edx.org/school/harvardx?utm_medium=partner-marketing&utm_source=referral&utm_campaign=harvard&utm_content=pll-course-page-machine-learning-ai-python",
    "https://ai.google.dev/gemini-api/docs/quickstart?lang=python&authuser=1",
    "https://aistudio.google.com/app/apikey",
    "https://pypi.org/account/login/?next=%2Fmanage%2Faccount%2Ftoken%2F",
    "https://hub.docker.com/",
    "https://console.cloud.google.com/welcome?_ga=2.81766295.-1022907512.1708408505&_gac=1.56740440.1708408505.CjwKCAiAlcyuBhBnEiwAOGZ2S71c7cYomyqQZ99tDDTENgibQlNk2OhAcfy650z2jGA9gNQoPjoW1hoCnDQQAvD_BwE&_gl=1*126p71l*_up*MQ..&gclid=CjwKCAiAlcyuBhBnEiwAOGZ2S71c7cYomyqQZ99tDDTENgibQlNk2OhAcfy650z2jGA9gNQoPjoW1hoCnDQQAvD_BwE&gclsrc=aw.ds&project=phrasal-ability-399616",
    "https://pll.harvard.edu/catalog?topics%5B702%5D=702&price%5B1%5D=1&max_price=&start_date=&keywords=&page=0",
    "https://myaccount.google.com/security-checkup/3?utm_source=google&utm_medium=email&utm_campaign=sap&aneid=-1243009658778639373&sea=8&rfn=1606787001342&anexp=saphpraf-f1--sapef-a3--saprfsm-const&pli=1",
    "https://gowthamoleti.medium.com/apps-i-use-and-why-you-should-too-7021c5703a77",
    "https://drive.google.com/drive/u/0/my-drive",
    "https://www.notion.so/83f6bac0f29f4ba295b9ffa09fd5f8fd",
    "https://docs.python.org/3/",
    "https://circleci.com/vcs-authorize/",
    "https://peps.python.org/pep-0008/",
    "https://flask.palletsprojects.com/en/3.0.x/deploying/",
    "https://flask.palletsprojects.com/en/3.0.x/tutorial/layout/",
    "https://flask.palletsprojects.com/en/3.0.x/patterns/packages/",
    "https://dashboard.cohere.com/welcome/login?redirect_uri=%2Fapi-keys",
    "https://docs.python.org/3.10/tutorial/whatnow.html",
    "https://app.roboflow.com/raviflow",
    "https://aman.ai/",
    "https://arjancodes.com/blog/",
    "https://github.com/ossu/computer-science/blob/master/extras/courses.md",
    "https://www.classcentral.com/",
    "https://app.auditorium.ai/login",
    "https://www.coursera.org/specializations/data-science-python",
    "https://www.upwork.com/freelancers/~01c63e262ee7afe4b8?qpn-profile-completeness=education",
    "https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Ravi%20Kumar",
    "https://ravikumarsspace46931.quora.com/earnings",
    "https://www.datascienceportfol.io/ravikumar",
    "https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/home/week/1",
    "https://www.coursera.org/learn/deploying-machine-learning-models-in-production/home/week/1",
    "https://dreamstudio.ai/generate",
    "https://app.aihub.qualcomm.com/account/",
    "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50",
    "https://medium.com/@taeefnajib/writing-unit-tests-for-your-data-science-projects-c3d46e98beb2",
    "https://github.com/orgs/https-deeplearning-ai/repositories",
    "https://medium.com/@wleelaki/a-brief-introduction-to-dagshub-for-beginners-100d66169e21",
    "https://mlflow.org/docs/latest/getting-started/intro-quickstart/index.html",
    "https://mlflow.org/docs/latest/getting-started/quickstart-2/index.html",
    "https://ravi46931.github.io/portfolio-website-2/",
    "https://dev.to/zinox9/installing-zsh-on-windows-37em",
    "https://therdnotes.com/setup-zsh-on-windows",
    "https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1",
    "https://medium.com/@mihail.dungarov/simplest-way-to-use-gemini-api-94398ab30486",
    "https://ai.google.dev/gemini-api/docs/model-tuning/tutorial?lang=python",
    "https://wellfound.com/profile/edit/resume",
    "https://unstop.com/job-portal",
    "https://internshala.com/chat/c-77918378?filter=all",
    "https://console.groq.com/docs/showcase-applications",
    "https://netclan.com/",
    "https://app.usebraintrust.com/jobs/?work_from_anywhere=true",
    "https://drive.google.com/file/d/1StXJhu4PI0Y82hRLLtpDoAnPI-pXsxzC/view",
    "https://sqlzoo.net/wiki/SQL_Tutorial",
    "https://portal.azure.com/?Microsoft_Azure_Education_correlationId=32148916-d64a-4c98-8f1a-0751f21aaf27&Microsoft_Azure_Education_newA4E=true&Microsoft_Azure_Education_asoSubGuid=ed2fa4e8-4982-4166-afcd-adbf019315ba#view/Microsoft_Azure_Education/EducationMenuBlade/~/overview",
    "https://drive.google.com/drive/folders/1iW7IPrVUqsHumgXUMH_rgeBLpJjRDCmJ",
    "https://doc.clickup.com/9015213037/d/h/8cnjezd-17675/ddd52c673443975?irclickid=TIc3hU1wexyKWCkRd2wZLUK2UkCzXQ3eLzx:3s0&utm_source=ir&utm_medium=cpc&utm_campaign=ir_cpc_at_nnc_pro_trial_all-devices_cpc_lp_x_all-departments_x_Datalumina%20B.V.&utm_content=&utm_term=1416724&irgwc=1",
    "https://setuptools.pypa.io/en/latest/index.html",
    "https://community.deeplearning.ai/t/feedforward-neural-networks-in-depth/98811",
    "https://spark.apache.org/docs/latest/api/python/getting_started/quickstart_df.html",
    "https://course.fast.ai/",
    "https://community.deeplearning.ai/?utm_campaign=forum-engagement&utm_medium=long-form-courses&utm_source=coursera"
  ];
