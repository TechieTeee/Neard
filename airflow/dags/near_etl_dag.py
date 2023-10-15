from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from near_etl import main

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2023, 10, 15),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'near_etl_dag',
    default_args=default_args,
    description='ETL DAG for Near Protocol',
    schedule_interval=timedelta(hours=1),  # Set schedule
)

run_etl = PythonOperator(
    task_id='run_etl',
    python_callable=main,
    dag=dag,
)
