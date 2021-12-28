FROM python:3.9.6-alpine3.14

ENV POETRY_VERSION=1.1.8

RUN apk add --no-cache gcc musl-dev python3-dev libffi-dev openssl-dev cargo postgresql-dev g++
RUN pip install -U pip
RUN pip install poetry==$POETRY_VERSION

COPY . /app

WORKDIR /app

RUN poetry config virtualenvs.create false \
  && poetry install --no-dev --no-interaction --no-ansi

EXPOSE 8000
CMD ["holidaycalc", "serve"]