from django.shortcuts import render

from rest_framework import viewsets

# Create your views here.
# Tabla UsuariosMedicos
from .models import UsuariosMedicos
from .serializers import UsuarioMedicoSerializer

# Vista a tabla Usuario Pacientes
from .models import UsuariosPacientes
from .serializers import UsuarioPacienteSerializer

# CRUD - ABML

# Tabla UsuariosMedicos
class UsuarioMedicoViewSet(viewsets.ModelViewSet):

    queryset=UsuariosMedicos.objects.all()
    serializer_class = UsuarioMedicoSerializer
    
# Tabla UsuariosPaciente
class UsuarioPacienteViewSet(viewsets.ModelViewSet):

    queryset=UsuariosPacientes.objects.all()
    serializer_class = UsuarioPacienteSerializer

