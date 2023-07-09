from django.urls import path, include

from rest_framework import routers
from AppFinal import views

router=routers.DefaultRouter()
router.register(r'usuariosmedicos',views.UsuarioMedicoViewSet)

urlpatterns=[
    path('',include(router.urls)),
]