from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from .views import SignUpView, LogInView, ComicView
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
router.register('comics', ComicView)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', SignUpView.as_view(), name='sign_up'),
    path('login/', LogInView.as_view(), name='log_in'),
    path('token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),
]
