from google_play_scraper import app
import pandas as pd
import numpy as np

from google_play_scraper import Sort, reviews_all


us_reviews = reviews_all(
    'com.busuu.android.en', sleep_milliseconds=0,  lang='en',  country='us',
    sort=Sort.NEWEST,
)

df = pd.DataFrame(np.array(us_reviews),columns=['review'])


df = df.join(pd.DataFrame(df.pop('review').tolist()))


df.head()