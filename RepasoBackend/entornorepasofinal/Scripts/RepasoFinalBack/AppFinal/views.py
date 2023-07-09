from django.shortcuts import render

from rest_framework import viewsets

# Create your views here.
# Tabla UsuariosMedicos
from .models import UsuariosMedicos
from .serializers import UsuarioMedicoSerializer

# CRUD - ABML
# Tabla UsuariosMedicos
class UsuarioMedicoViewSet(viewsets.ModelViewSet):

    queryset=UsuariosMedicos.objects.all()
    serializer_class = UsuarioMedicoSerializer